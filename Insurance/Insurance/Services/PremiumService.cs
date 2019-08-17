using Insurance.DAL;
using Insurance.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace Insurance.Services
{
    public class PremiumService : IPremiumService
    {
        private IInsuranceRepository<Occupation> repoOccupation;

        public PremiumService(IInsuranceRepository<Occupation> repoOccupationRating)
        {
            this.repoOccupation = repoOccupationRating;
        }

        public decimal CalculatePremium(int occupIationID, int age, int deathcoveramount)
        {

            decimal premium = 0;
            try
            {
                Occupation ocup = repoOccupation.FindSingle(x => x.ID == occupIationID);
                if (ocup != null)
                {
                    decimal factor = ocup.OccupationRating.Factor;
                    premium = (deathcoveramount * factor * age) / (1000 * 12);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message + "\n" + e.StackTrace);
            }
            return premium;
        }

        public List<Occupation> GetOccupations()
        {
            List<Occupation> occupations = new List<Occupation>();
            try
            {
                occupations = repoOccupation.GetAll().ToList();
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message + "\n" + e.StackTrace);
            }
            return occupations;
        }
    }
}