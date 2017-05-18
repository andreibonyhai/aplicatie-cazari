namespace Services.Extensions.Patching
{
    public static class ObjectCopyingExtensions
    {
        public static void Copy<T>(this T patchingTarget, T patchingSource)
        {
            var patchingProperties = typeof(T).GetProperties();
            foreach (var property in patchingProperties)
            {
                property.SetValue(patchingTarget, property.GetValue(patchingSource));
            }
        }
    }
}
