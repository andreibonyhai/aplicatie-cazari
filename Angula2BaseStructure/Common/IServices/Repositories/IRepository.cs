using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace IServices.Repositories
{
    public interface IRepository : IDisposable { }

    public interface IRepository<T> : IRepository
    {
        IQueryable<T> GetAll();
        IQueryable<T> FindAsQueryable(object id);
        IQueryable<T> FindAsQueryable(T entity);
        T Find(object id);
        IQueryable<T> Where(Expression<Func<T, bool>> predicate);
        T Add(T entity);
        IEnumerable<T> Add(IEnumerable<T> entities);
        void Edit(T entity);
        void Delete(object id);
        void Delete(T entity);
        void Delete(IEnumerable<T> entities);
        int Count();
        void SaveChanges();
    }
}