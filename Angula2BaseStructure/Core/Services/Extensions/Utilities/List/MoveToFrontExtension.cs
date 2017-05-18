using System.Collections.Generic;

namespace Services.Extensions.Utilities.List
{
    public static class MoveToFrontExtension
    {
        public static void MoveToFront<T>(this IList<T> list, int idx)
        {
            var element = list[idx];
            list.RemoveAt(idx);
            list.Insert(0, element);
        }
    }
}