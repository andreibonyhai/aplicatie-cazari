using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Utils
{
    public class SpecialCase
    {
        public int SpecialCaseId { get; set; }
        public string Name { get; set; }
        public virtual Discount Discount { get; set; }
    }
}
