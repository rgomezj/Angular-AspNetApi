using ExpensesAPI.Data;
using ExpensesAPI.Models;
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
    [EnableCors("http://localhost:4200", "*", "*")]
    public class EntriesController : ApiController
    {
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

        [HttpPost]
        public IHttpActionResult PostEntry([FromBody] Entry entry)
        {
            try
            {
                if(!ModelState.IsValid)
                {
                    return BadRequest();
                }
                using (var dbContext = new AppDBContext())
                {
                    dbContext.Entries.Add(entry);
                    dbContext.SaveChanges();
                    return Ok("Entry was created");
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
