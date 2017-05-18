using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using IServices.Repositories;
using Repositories.EntityFramework.Repositories;

namespace Repositories.EntityFramework.Services
{
    public class DatabaseRepositoryService<TContext> : IRepositoryService where TContext : DbContext
    {
        private readonly TContext context;
        public DatabaseRepositoryService(TContext context)
        {
            this.context = context;
        }


        public IRepository<T> GetRepository<T>() where T : class
        {
            return new DatabaseRepository<T>(context);
        }

        public virtual IQueryable<T> GetAll<T>() where T : class
        {
            return GetRepository<T>().GetAll();
        }

        public virtual IQueryable<T> FindAsQueryable<T>(object id) where T : class
        {
            return GetRepository<T>().FindAsQueryable(id);
        }

        public T Find<T>(object id) where T : class
        {
            return FindAsQueryable<T>(id).FirstOrDefault();
        }

        public virtual IQueryable<T> Where<T>(Expression<Func<T, bool>> predicate) where T : class
        {
            return GetRepository<T>().Where(predicate);
        }

        public virtual T Add<T>(T entity) where T : class
        {
            var repository = GetRepository<T>();
            var result = repository.Add(entity);
            repository.SaveChanges();
            return result;
        }

        public virtual IEnumerable<T> Add<T>(IEnumerable<T> entities) where T : class
        {
            var repository = GetRepository<T>();
            var result = repository.Add(entities).ToList();
            repository.SaveChanges();
            return result;
        }

        public virtual void Update<T>(T entity) where T : class
        {
            var repository = GetRepository<T>();
            var oldEntity = repository.FindAsQueryable(entity);
            repository.Edit(entity);
            repository.SaveChanges();
        }

        public virtual void Delete<T>(object id) where T : class
        {
            var repository = GetRepository<T>();
            var element = repository.FindAsQueryable(id).FirstOrDefault();
            if (element == null) return;
            repository.Delete(element);
            repository.SaveChanges();
        }

        public virtual void Delete<T>(T entity) where T : class
        {
            var repository = GetRepository<T>();
            repository.Delete(entity);
            repository.SaveChanges();
        }

        public virtual void Delete<T>(IEnumerable<T> entities) where T : class
        {
            var repository = GetRepository<T>();
            entities = entities.ToList();
            repository.Delete(entities);
            repository.SaveChanges();
        }

        public virtual int Count<T>() where T : class
        {
            return GetRepository<T>().Count();
        }

        public void Dispose()
        {
        }
    }
}