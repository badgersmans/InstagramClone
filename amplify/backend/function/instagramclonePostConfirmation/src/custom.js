/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log(`Hello from lambda function 👋`);
  console.log(event);

  return event;
};
