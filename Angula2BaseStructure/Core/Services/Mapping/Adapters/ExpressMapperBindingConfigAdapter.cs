using System;
using System.Linq.Expressions;
using ExpressMapper;
using IServices.Mapping;

namespace Services.Mapping.Adapters
{
    public class ExpressMapperBindingConfigAdapter<TSource, TTarget> : IBindingConfig<TSource, TTarget> where TSource : class where TTarget : class
    {
        public ExpressMapperBindingConfigAdapter(IMemberConfiguration<TSource, TTarget> memberConfiguration)
        {
            this.memberConfiguration = memberConfiguration;
        }

        private readonly IMemberConfiguration<TSource, TTarget> memberConfiguration;

        public void After(Action<TSource, TTarget> afterHandler)
        {
            memberConfiguration.After(afterHandler);
        }

        public void Before(Action<TSource, TTarget> beforeHandler)
        {
            memberConfiguration.Before(beforeHandler);
        }

        public void CaseSensitive(bool isCaseSensitive)
        {
            memberConfiguration.CaseSensitive(isCaseSensitive);
        }

        public void CompileTo(CompilationType compilationType)
        {
            CompilationTypes expressCompilationType;
            switch (compilationType)
            {
                case CompilationType.Source:
                    expressCompilationType = CompilationTypes.Source;
                    break;
                case CompilationType.Destination:
                    expressCompilationType = CompilationTypes.Destination;
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(compilationType), compilationType, null);
            }
            memberConfiguration.CompileTo(expressCompilationType);
        }

        public void Function<TMember, TNMember>(Func<TSource, TMember> src, Expression<Func<TTarget, TNMember>> dest)
        {
            memberConfiguration.Function(dest, src);
        }

        public void Ignore<TNMember>(Expression<Func<TTarget, TNMember>> dest)
        {
            memberConfiguration.Ignore(dest);
        }

        public void Instantiate(Expression<Func<TSource, TTarget>> constructor)
        {
            memberConfiguration.Instantiate(constructor);
        }

        public void InstantiateFunc(Func<TSource, TTarget> constructor)
        {
            memberConfiguration.InstantiateFunc(constructor);
        }

        public void Member<TMember, TNMember>(Expression<Func<TSource, TMember>> src, Expression<Func<TTarget, TNMember>> dest)
        {
            memberConfiguration.Member(dest, src);
        }

        public void Value<TNMember>(Expression<Func<TTarget, TNMember>> dest, TNMember value)
        {
            memberConfiguration.Value(dest, value);
        }
    }
}