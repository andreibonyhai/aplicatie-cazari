using System;
using System.Collections.Generic;
using IServices.Logging;

namespace Services.Logging
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="ILoggingService" />
    /// <seealso>
    ///   <cref>Osm_Infrastructure.Logging.ILoggingService</cref>
    /// </seealso>
    public class Log4NetLoggingService : ILoggingService
    {
        private readonly object lockObject = new object();
        public Log4NetLoggingService()
        {
        }

        /// <summary>
        /// Gets the logger.
        /// </summary>
        /// <param name="loggerName">Name of the logger.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public ILogger GetLogger(Type loggerName)
        {
            return GetLogger(loggerName.FullName);
        }

        /// <summary>
        /// Gets the logger.
        /// </summary>
        /// <param name="loggerName">Name of the logger.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public ILogger GetLogger(string loggerName)
        {
            lock (lockObject)
            {
                if (loggerCache.ContainsKey(loggerName))
                    return loggerCache[loggerName];
                var logger = new Log4NetLogger(log4net.LogManager.GetLogger(loggerName));
                loggerCache.Add(loggerName, logger);
                return logger;
            }
        }

        public IDictionary<string, object> Properties
        {
            get
            {
                // = log4net.GlobalContext.Properties;
                throw new NotImplementedException();
            }
        }

        private readonly IDictionary<string, ILogger> loggerCache = new Dictionary<string, ILogger>();
    }
}