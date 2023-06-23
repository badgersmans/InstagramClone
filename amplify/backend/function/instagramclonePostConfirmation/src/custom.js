/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const env = process.env.ENV
const AppSyncId = process.env.API_INSTAGRAMCLONE_GRAPHQLAPIIDOUTPUT
const docClient = new AWS.DynamoDB.DocumentClient();
const TableName = `User-${AppSyncId}-${env}`;

const userExists = async (id) => {
  const params = {
    TableName,
    Key: id,
  };

  try {
    const response = await docClient.get(params).promise();
    return !!response.Item;
  } catch (error) {
    return false;
  }
};

const saveUser = async (user) => {
  const date = new Date();
  const dateString = date.toISOString();
  const timestamp = date.getTime();
  const Item = {
    ...user,
    __typename: 'User',
    createdAt: dateString,
    updatedAt: dateString,
    _lastChangedAt: timestamp,
    _version: 1,
  }
  const params = {
    TableName,
    Item
  }

  try {
    await docClient.put(params).promise();
  } catch (error) {
    console.log(error)
  }
};

exports.handler = async (event, context) => {
  console.log(`Hello from lambda function 👋`);
  console.log(event);

  if(!event?.request?.userAttributes) {
    console.log('No user data available');
    return;
  }

  const {sub, name, email} = event.request.userAttributes; // sub, email_verified, cognito:user_status, name, email

  const newUser = {
    id: sub,
    name,
    email,
  }

  // check if user already exists
  if(!(await userExists(newUser.id))) {
    // if not, then save user to db
    await saveUser(newUser);
    console.log(`User ${newUser.id} has been saved to dynamo db`)
  } else {
    console.log(`User ${newUser.id} already exists`)
  }

  return event;
};
