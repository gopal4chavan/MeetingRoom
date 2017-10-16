using System;
using System.Collections.Generic;
using System.Linq;
using DataLayer;
using DomainLayer;

namespace Repo
{
    public class LocationRepo
    {
        private AngularPOCEntities db;

        public IEnumerable<LocationTbl> GetAllLocations()
        {
            try
            {

                using (db = new AngularPOCEntities())
                {
                    return db.tblLocations.Select(m => new LocationTbl()
                    {
                        locationID = m.locationID,
                        locationName = m.locationName
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
