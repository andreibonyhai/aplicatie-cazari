using System;
using System.Linq.Expressions;

namespace IServices.Mapping
{
    public interface IBindingConfig<TSource, TTarget> where TSource : class where TTarget : class
    {
        void After(Action<TSource, TTarget> afterHandler);
        void Before(Action<TSource, TTarget> beforeHandler);
        void CaseSensitive(bool isCaseSensitive);
        void CompileTo(CompilationType compilationType);
        void Function<TMember, TNMember>(Func<TSource, TMember> src, Expression<Func<TTarget, TNMember>> dest);
        void Ignore<TNMember>(Expression<Func<TTarget, TNMember>> dest);
        void Instantiate(Expression<Func<TSource, TTarget>> constructor);
        void InstantiateFunc(Func<TSource, TTarget> constructor);
        void Member<TMember, TNMember>(Expression<Func<TSource, TMember>> src, Expression<Func<TTarget, TNMember>> dest);
        void Value<TNMember>(Expression<Func<TTarget, TNMember>> dest, TNMember value);
    }

    public enum CompilationType
    {
        Source,
        Destination
    }
}