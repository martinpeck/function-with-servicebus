# An Azure Function that uses Service Bus

The title says it all. This is an Azure Function that uses Service Bus.

## Health Warning
At present, this is being used to repo an issue whereby Service Bus bindings don't get triggered if you are:

- running this locally
- using dotnet core
- using the 2.0 Functions runtime

As such, expect there to be code here that isn't working, or that is here for debug purposes. Don't use this as a canonical working example of an Azure Function with Service Bus bindings.
