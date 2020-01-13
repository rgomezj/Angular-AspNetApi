using ExpensesAPI.Data;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ExpensesAPI.Controllers
{
    public class EntriesController : ApiController
    {
        [EnableCors("http://localhost:4200", "*", "*")]
        public IHttpActionResult GetEntries()
        {
            try
            {
                using (var dbContext = new AppDBContext())
                {
                    return Ok(dbContext.Entries.ToList());
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
