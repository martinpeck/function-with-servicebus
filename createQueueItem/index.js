module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var message = 'Service Bus queue message created at ' + Date.now();
    context.log(message);   
    context.bindings.outputQueueMessage = message;
    context.done();
};