using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using IServices.Repositories;

namespace Repositories.InMemory
{
    public class InMemoryRepository<T> : IRepository<T> where T : class
    {
        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> FindAsQueryable(object id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> FindAsQueryable(T entity)
        {
            throw new NotImplementedException();
        }

        public T Find(object id)
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> Where(Expression<Func<T, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public T Add(T entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> Add(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }

        public void Edit(T entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(object id)
        {
            throw new NotImplementedException();
        }

        public void Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(IEnumerable<T> entities)
        {
            throw new NotImplementedException();
        }

        public int Count()
        {
            throw new NotImplementedException();
        }

        public void SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}