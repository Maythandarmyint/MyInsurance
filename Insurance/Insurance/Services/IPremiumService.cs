using Insurance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Insurance.Services
{
    public interface IPremiumService
    {
        decimal CalculatePremium(int occupIationID, int age, int deathcoveramount);

        List<Occupation> GetOccupations();
    }
}
