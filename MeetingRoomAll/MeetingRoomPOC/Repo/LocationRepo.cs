using System;
using System.Collections.Generic;
using System.Linq;
using DataLayer;
using DomainLayer;

namespace Repo
{
    public class LocationRepo
    {
        private AngularPOCEntities _db;

        public IEnumerable<LocationTbl> GetAllLocations()
        {
            try
            {

                using (_db = new AngularPOCEntities())
                {
                    return _db.TblLocations.Select(m => new LocationTbl()
                    {
                        LocationID = m.LocationID,
                        LocationName = m.LocationName
                    }).ToList();
                }
            }
            catch(Exception e)
            {
                throw;
            }
        }
    }
}
