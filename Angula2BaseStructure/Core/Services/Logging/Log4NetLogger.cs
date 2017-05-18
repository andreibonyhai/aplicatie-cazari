using System;
using log4net;
using log4net.Core;
using ILogger = IServices.Logging.ILogger;

namespace Services.Logging
{
    /// <summary>
    /// 
    /// </summary>
    /// <seealso cref="IServices.Logging.ILogger" />
    public class Log4NetLogger : ILogger
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Log4NetLogger" /> class.
        /// </summary>
        /// <param name="logger">The logger.</param>
        public Log4NetLogger(ILog logger)
        {
            this.logger = logger;
        }

        /// <summary>
        /// The logger
        /// </summary>
        private readonly ILog logger;

        /// <summary>
        /// Logs the specified log level.
        /// </summary>
        /// <param name="logLevel">The log level.</param>
        /// <param name="message">The message.</param>
        /// <param name="exception">The exception.</param>
        /// <param name="wrappingPoint">The wrapping point.</param>
        private void Log(Level logLevel, object message, Exception exception, Type wrappingPoint)
        {
            if (wrappingPoint == null) wrappingPoint = typeof (Log4NetLogger);
            logger.Logger.Log(wrappingPoint, logLevel, message, exception);
        }


        /// <summary>
        /// Debugs the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <param name="ex">The ex.</param>
        /// <param name="wrappingPoint">The wrapping point.</param>
        public void Debug(object message, Exception ex = null, Type wrappingPoint = null)
        {
            Log(Level.Debug, message, ex, wrappingPoint);
        }

        /// <summary>
        /// Informations the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <param name="ex">The ex.</param>
        /// <param name="wrappingPoint">The wrapping point.</param>
        public void Info(object message, Exception ex = null, Type wrappingPoint = null)
        {
            Log(Level.Info, message, ex, wrappingPoint);
        }

        /// <summary>
        /// Warns the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <param name="ex">The ex.</param>
        /// <param name="wrappingPoint">The wrapping point.</param>
        public void Warn(object message, Exception ex = null, Type wrappingPoint = null)
        {
            Log(Level.Warn, message, ex, wrappingPoint);
        }

        /// <summary>
        /// Errors the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <param name="ex">The ex.</param>
        /// <param name="wrappingPoint">The wrapping point.</param>
        public void Error(object message, Exception ex = null, Type wrappingPoint = null)
        {
            Log(Level.Error, message, ex, wrappingPoint);
        }

        /// <summary>
        /// Fatals the specified message.
        /// </summary>
        /// <param name="message">The message.</param>
        /// <param name="ex">The ex.</param>
        /// <param name="wrappingPoint">The wrapping point.</param>
        public void Fatal(object message, Exception ex = null, Type wrappingPoint = null)
        {
            Log(Level.Fatal, message, ex, wrappingPoint);
        }
    }
}