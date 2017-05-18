using System.Collections.Generic;

namespace Services.Extensions.Utilities.List
{
    public static class SwapElementsExtension
    {
        public static void Swap<T>(this IList<T> list, int oldIndex, int newIndex)
        {
            var temp = list[oldIndex];
            list[oldIndex] = list[newIndex];
            list[newIndex] = temp;
        }
    }
}