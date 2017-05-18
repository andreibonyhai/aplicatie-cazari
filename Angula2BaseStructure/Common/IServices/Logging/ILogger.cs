using System;

namespace IServices.Logging
{
    public interface ILogger
    {
        void Debug(object message, Exception exception = null, Type wrapper = null);
        void Info(object message, Exception exception = null, Type wrapper = null);
        void Warn(object message, Exception exception = null, Type wrapper = null);
        void Error(object message, Exception exception = null, Type wrapper = null);
        void Fatal(object message, Exception exception = null, Type wrapper = null);
    }
}