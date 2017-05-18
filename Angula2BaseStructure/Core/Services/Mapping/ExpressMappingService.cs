using System;
using System.Collections.Generic;
using System.Linq;
using ExpressMapper;
using IServices.Mapping;
using Services.Extensions.Patching;
using Services.Mapping.Adapters;
using IMappingService = IServices.Mapping.IMappingService;

namespace Services.Mapping
{
    public class ExpressMappingService : IMappingService
    {
        public ExpressMappingService()
        {
            Reset();
        }

        public void Bind<TSource, TTarget>() where TSource : class where TTarget : class
        {
            Mapper.Register<TSource, TTarget>();
        }

        public void Bind<TSource, TTarget>(Action<IBindingConfig<TSource, TTarget>> config) where TSource : class where TTarget : class
        {
            config(new ExpressMapperBindingConfigAdapter<TSource, TTarget>(Mapper.Register<TSource, TTarget>()));
        }

        public void Verify()
        {
            Mapper.Compile();
        }

        public void Reset()
        {
            Mapper.Reset();
        }

        public TTarget Map<TSource, TTarget>(TSource source) where TSource : class where TTarget : class
        {
            return Mapper.Map<TSource, TTarget>(source);
        }

        public IEnumerable<TTarget> Map<TSource, TTarget>(IEnumerable<TSource> source) where TSource : class where TTarget : class
        {
            return source.Select(Map<TSource, TTarget>);
        }

        public IQueryable<TTarget> Map<TSource, TTarget>(IQueryable<TSource> source) where TSource : class where TTarget : class
        {
            return source.Select(e => Map<TSource, TTarget>(e));
        }

        public TTarget Map<TSource, TTarget>(TSource source, TTarget target) where TSource : class where TTarget : class
        {
            return Mapper.Map(source, target);
        }

        public TTarget DynamicMap<TInterface, TTarget>(TInterface source) where TInterface : class where TTarget : class
        {
            var concreteSourceType = source.GetType();
            var targetType = typeof(TTarget);
            var mapMethod = typeof(ExpressMappingService).GetMethods().First(m => m.Name.Equals(nameof(Map)) && m.ReturnType.IsGenericParameter
                            && m.GetParameters().Length == 1).MakeGenericMethod(concreteSourceType, targetType);
            return (TTarget)mapMethod.Invoke(this, new object[] { source });
        }

        public void Patch<TSource, TTarget>(TSource patchingTarget, TTarget patchingSource) where TSource : class where TTarget : class
        {
            var patchingTemplate = Map<TTarget, TSource>(patchingSource);
            patchingTarget.Copy(patchingTemplate);
        }
    }
}