namespace Services.Extensions.String
{
    public static class WordRemoval
    {
        public static string Remove(this string input, string toRemove)
        {
            return input.Replace(toRemove, string.Empty);
        } 
    }
}