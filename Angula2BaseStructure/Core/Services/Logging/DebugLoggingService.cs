using System;
using System.Collections.Generic;
using IServices.Logging;

namespace Services.Logging
{
    public class DebugLoggingService : ILoggingService
    {

        private ILogger GetFromCache(string key)
        {
            if (loggers.ContainsKey(key)) return loggers[key];
            var logger = new DebugLogger(key);
            loggers.Add(key, logger);
            return logger;
        }

        public ILogger GetLogger(Type loggerName)
        {
            return GetFromCache(loggerName.FullName);
        }

        public ILogger GetLogger(string loggerName)
        {
            return GetFromCache(loggerName);
        }

        public IDictionary<string, object> Properties { get; } = new Dictionary<string, object>();

        private readonly IDictionary<string, ILogger> loggers = new Dictionary<string, ILogger>(); 
    }
}