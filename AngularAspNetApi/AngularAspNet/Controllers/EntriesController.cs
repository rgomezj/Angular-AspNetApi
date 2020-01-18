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

        public IHttpActionResult GetEntry(int id)
        {
            try
            {
                using (var dbContext = new AppDBContext())
                {
                    var entry = dbContext.Entries.FirstOrDefault(c => c.Id == id);
                    if (entry == null) { return NotFound(); }
                    return Ok(entry);
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

        [HttpPut]
        public IHttpActionResult UpdateEntry(int id, [FromBody] Entry entry)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                if(id != entry.Id)
                {
                    return BadRequest();
                }

                using (var dbContext = new AppDBContext())
                {
                    var oldEntry = dbContext.Entries.FirstOrDefault(c => c.Id == id);
                    if(oldEntry == null) { return NotFound(); }

                    oldEntry.Description = entry.Description;
                    oldEntry.IsExpense = entry.IsExpense;
                    oldEntry.Value = entry.Value;
                    dbContext.SaveChanges();
                    return Ok("Entry was updated");
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpDelete]
        public IHttpActionResult DeleteEntry(int id)
        {
            try
            {
                using (var dbContext = new AppDBContext())
                {
                    var deleteEntry = dbContext.Entries.FirstOrDefault(c => c.Id == id);
                    if (deleteEntry == null) { return NotFound(); }

                    dbContext.Entries.Remove(deleteEntry);
                    dbContext.SaveChanges();
                    return Ok("Entry was deleted");
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
