using System;
using System.Text;
using System.Threading;
using ILogger = IServices.Logging.ILogger;

namespace Services.Logging
{
    public class DebugLogger : ILogger
    {
        //private readonly IVarDumper varDumper = new JsonVarDumper();

        public DebugLogger(string name)
        {
            Name = name;
        }

        private string Name { get; }

        private string GenerateLog(string logLevel, object message, Exception ex)
        {
            var result = new StringBuilder();
            var timeStamp = DateTime.Now;
            result.Append(timeStamp);
            result.Append(":" + timeStamp.Millisecond.ToString("D3"));
            result.Append($" | {logLevel}".PadRight(8));
            result.Append($" | CurrentThreadId: {Thread.CurrentThread.ManagedThreadId}".PadRight(18));
            result.Append($" | Logger: {Name}");
            result.Append($" | Message: {message}");
            //if (ex != null)
            //    result.Append($" | Exception: {varDumper.Dump(ex)}");

            return result.ToString();
        }

        public void Debug(object message, Exception exception = null, Type wrappingPoint = null)
        {
            System.Diagnostics.Debug.WriteLine(GenerateLog("DEBUG", message, exception));
        }

        public void Info(object message, Exception exception = null, Type wrappingPoint = null)
        {
            System.Diagnostics.Debug.WriteLine(GenerateLog("INFO", message, exception));
        }

        public void Warn(object message, Exception exception = null, Type wrappingPoint = null)
        {
            System.Diagnostics.Debug.WriteLine(GenerateLog("WARN", message, exception));
        }

        public void Error(object message, Exception exception = null, Type wrappingPoint = null)
        {
            System.Diagnostics.Debug.WriteLine(GenerateLog("ERROR", message, exception));
        }

        public void Fatal(object message, Exception exception = null, Type wrappingPoint = null)
        {
            System.Diagnostics.Debug.WriteLine(GenerateLog("FATAL", message, exception));
        }
    }
}