namespace ExpensesAPI.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ExpensesAPI.Data.AppDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ExpensesAPI.Data.AppDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            context.Entries.Add(new Models.Entry()
            {
                Description = "test1",
                IsExpense = true,
                Value = 100
            });

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
        }
    }
}
