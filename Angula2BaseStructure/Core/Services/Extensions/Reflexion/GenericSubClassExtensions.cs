using System;

namespace Services.Extensions.Reflexion
{
    public static class GenericSubclassExtensions
    {
        public static bool IsDerivedOfGenericType(this Type type, Type genericType)
        {
            var baseType = type.BaseType;
            if (baseType == null) return false;
            return baseType.IsGenericType && baseType.GetGenericTypeDefinition() == genericType;
        }
    }
}