using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using IServices.Repositories;

namespace Repositories.InMemory
{
    public class InMemoryRepositoryService : IRepositoryService
    {
        #region Constructor

        public InMemoryRepositoryService() { }

        #endregion Constructor

        #region Methods

        public IRepository<T> GetRepository<T>() where T : class
        {
            var repo = (IRepository<T>)repositories.FirstOrDefault(r => r is IRepository<T>);
            if (repo != null) return repo;
            repo = new InMemoryRepository<T>();
            repositories.Add(repo);
            return repo;
        }

        #endregion Methods

        #region IRepositoryService

        public IQueryable<T> GetAll<T>() where T : class
        {
            return GetRepository<T>().GetAll();
        }

        public IQueryable<T> FindAsQueryable<T>(object id) where T : class
        {
            return GetRepository<T>().FindAsQueryable(id);
        }

        public T Find<T>(object id) where T : class
        {
            return FindAsQueryable<T>(id).FirstOrDefault();
        }

        public IQueryable<T> Where<T>(Expression<Func<T, bool>> predicate) where T : class
        {
            return GetRepository<T>().Where(predicate);
        }

        public T Add<T>(T entity) where T : class
        {
            var result = GetRepository<T>().Add(entity);
            return result;
        }

        public IEnumerable<T> Add<T>(IEnumerable<T> entities) where T : class
        {
            var result = GetRepository<T>().Add(entities).ToList();
            return result;
        }

        public void Update<T>(T entity) where T : class
        {
            GetRepository<T>().Edit(entity);
        }

        public void Delete<T>(object id) where T : class
        {
            var repo = GetRepository<T>();
            var entity = repo.FindAsQueryable(id);
            if (entity == null) return;
            repo.Delete(id);
        }

        public void Delete<T>(T entity) where T : class
        {
            GetRepository<T>().Delete(entity);
        }

        public void Delete<T>(IEnumerable<T> entities) where T : class
        {
            entities = entities.ToList();
            GetRepository<T>().Delete(entities);
        }

        public int Count<T>() where T : class
        {
            return GetRepository<T>().Count();
        }


        #endregion IRepositoryService

        #region Fields

        private readonly IList<IRepository> repositories = new List<IRepository>();

        #endregion Fields

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}