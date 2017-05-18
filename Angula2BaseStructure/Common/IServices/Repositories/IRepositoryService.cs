using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace IServices.Repositories
{
    public interface IRepositoryService : IDisposable
    {
        IQueryable<T> GetAll<T>() where T : class;
        IQueryable<T> FindAsQueryable<T>(object id) where T : class;
        T Find<T>(object id) where T : class;
        IQueryable<T> Where<T>(Expression<Func<T, bool>> predicate) where T : class;
        T Add<T>(T entity) where T : class;
        IEnumerable<T> Add<T>(IEnumerable<T> entities) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(object id) where T : class;
        void Delete<T>(T entity) where T : class;
        void Delete<T>(IEnumerable<T> entities) where T : class;
        int Count<T>() where T : class;
        IRepository<T> GetRepository<T>() where T : class;
    }
}