using System;
using System.Collections.Generic;

namespace IServices.Logging
{
    public interface ILoggingService
    {
        ILogger GetLogger(Type loggerName);
        ILogger GetLogger(string loggerName);

        IDictionary<string, object> Properties { get; }
    }
}