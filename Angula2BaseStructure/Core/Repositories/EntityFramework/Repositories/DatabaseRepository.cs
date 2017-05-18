using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using IServices.Repositories;

namespace Repositories.EntityFramework.Repositories
{
    public class DatabaseRepository<T> : IRepository<T>, IDisposable where T : class
    {
        private DbContext Context { get; }

        public DatabaseRepository(DbContext context)
        {
            Context = context;
        }

        public virtual IQueryable<T> GetAll()
        {
            return Context.Set<T>().ToList().AsQueryable();
        }

        public virtual IQueryable<T> FindAsQueryable(object id)
        {
            var element = Context.Set<T>().Find(id);
            var result = new List<T>();
            if (element != null)
                result.Add(element);
            return result.AsQueryable();
        }

        public IQueryable<T> FindAsQueryable(T entity)
        {
            var element = Context.Entry(entity).Entity;
            var result = new List<T>();
            if (element != null)
                result.Add(element);
            return result.AsQueryable();
        }

        public T Find(object id)
        {
            return FindAsQueryable(id).FirstOrDefault();
        }

        public virtual IQueryable<T> Where(Expression<Func<T, bool>> predicate)
        {
            return Context.Set<T>().Where(predicate).ToList().AsQueryable();
        }

        public virtual T Add(T entity)
        {
            return Context.Set<T>().Add(entity);
        }

        public IEnumerable<T> Add(IEnumerable<T> entities)
        {
            var dbSet = Context.Set<T>();
            return entities.Select(entity => dbSet.Add(entity)).ToList();
        }

        public virtual void Edit(T entity)
        {
            Context.Entry(entity).State = EntityState.Modified;
        }

        public void Delete(object id)
        {
            var element = Context.Set<T>().Find(id);
            if (element == null) return;
            Delete(element);
        }

        public virtual void Delete(T entity)
        {
            Context.Entry(entity).State = EntityState.Deleted;
        }

        public void Delete(IEnumerable<T> entities)
        {
            foreach (var entity in entities)
            {
                Delete(entity);
            }
        }

        public int Count()
        {
            return Context.Set<T>().Count();
        }

        public void SaveChanges()
        {
            try
            {
                Context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            Context.Dispose();
        }
    }
}