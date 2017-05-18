using System;

namespace Entities
{
    public class Log
    {
        public int LogId { get; set; }
        public DateTime TimeStamp { get; set; }
        public string Level { get; set; }
        public string Thread { get; set; }
        public string Message { get; set; }
        public string Exception { get; set; }
        public string Identity { get; set; }
        public string Location { get; set; }

        public object GetIdentifier()
        {
            return LogId;
        }
    }
}