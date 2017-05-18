using System;

namespace IServices.Mapping
{
    public interface IBinder
    {
        void Bind<TSource, TTarget>() where TSource : class
                                      where TTarget : class;
        void Bind<TSource, TTarget>(Action<IBindingConfig<TSource, TTarget>> config) where TSource : class
                                                                                     where TTarget : class;

        void Verify();
        void Reset();
    }
}