using System;
using System.Collections.Generic;
using System.IO;
using IServices.Logging;

namespace PriceChange.WebApi.BusinessLogic.FileProcessor.Declarations
{
    public interface IFileProcessor : IDisposable
    {
        List<ColumnHeader> GetColumns();
        //IDictionary<string, double> GetPrices(FeedRule rule, ILogger logger);
        StreamReader StreamReader { get; }
        void Reset();
    }
    public class ColumnHeader
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public enum FileType { Csv, Xml, Xls }
}
