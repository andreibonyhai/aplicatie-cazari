using System.Collections.Generic;
using System.Linq;

namespace IServices.Mapping
{
    public interface IMapper
    {
        TTarget Map<TSource, TTarget>(TSource source) where TSource : class where TTarget : class;
        IEnumerable<TTarget> Map<TSource, TTarget>(IEnumerable<TSource> source) where TSource : class where TTarget : class;
        IQueryable<TTarget> Map<TSource, TTarget>(IQueryable<TSource> source) where TSource : class where TTarget : class;
        TTarget Map<TSource, TTarget>(TSource source, TTarget target) where TSource : class where TTarget : class;
        TTarget DynamicMap<TInterface, TTarget>(TInterface source) where TInterface : class where TTarget : class;
        void Patch<TSource, TTarget>(TSource patchingTarget, TTarget patchingSource) where TSource : class where TTarget : class;
    }
}