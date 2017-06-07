using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Angula2BaseStructure.BusinessLogic.Declarations;
using Entities.Students;
using System.IO;

namespace Angula2BaseStructure.BusinessLogic.Implementations
{
    public class DocumentGenerator
    {
        public void GenerateDocument(Student student)
        {
            var p1 =
                "Intre Universitatea Tehnica din Cluj-Napoca cu sediul in str. Memorandumului nr. 28,"+" titular al dreptului de administrare a caminelor studentesti cu destinatia de locuinta,"+
                " proprietate de stat, in calitate de locator, reprezentat prin administrator si(*) @@NUME @@PRENUME,"+
                " student(a) la Facultatea de @@FACULTATE sectia @@SECTIE anul @@AN nascut la data de @@DATANASTERII"+
                " cu domiciliul stabil in localitatea @@LOCALITATE, strada @@STRADA nr @@NR bl. @@BLOC sc. @@SCARA ap. @@APARTAMENT"+
                " telefon @@TELEFON judetul @@JUDET, posesor al CI. seria @@SERIE nr. @@NRBULETIN cod numeric personal @@CNP "+
                "in calitate de locatar (chirias) a intervenit prezentul contract de inchiriere\r\n\r\n";

            var p2 = "Obiectul contractului il constituie darea in folosinta pentru anul universitar !!!!!!!! a unei suprafete locative"+
                "cu destinatia de locuinta in @@CAMIN camera @@CAMERA, a instalatiilor si a inventarului precizat mai jos:\r\n\r\n";



            p1 = p1.Replace("@@PRENUME", student.FirstName);
            p1 = p1.Replace("@@NUME", student.LastName);
            p1 = p1.Replace("@@FACULTATE", student.Faculty);
            //REPLACE SECTIE HERE
            p1 = p1.Replace("@@SECTIE", student.Specialisation);
            p1 = p1.Replace("@@AN", student.Year);
            //REPLACE DATA NASTERII HERE
            p1 = p1.Replace("@@LOCALITATE", student.Address.Localitate);
            p1 = p1.Replace("@@STRADA", student.Address.Street);
            p1 = p1.Replace("@@NR", student.Address.Number);
            p1 = p1.Replace("@@BLOC", student.Address.Bloc);
            p1 = p1.Replace("@@SCARA", student.Address.Scara);
            p1 = p1.Replace("@@APARTAMENT", student.Address.Apartament);
            p1 = p1.Replace("@@JUDET", student.Address.Judet);
            p1 = p1.Replace("@@TELEFON", student.Phone);
            p1 = p1.Replace("@@SERIE", student.Serie);
            p1 = p1.Replace("@@NRBULETIN", student.NrBuletin);
            p1 = p1.Replace("@@CNP", student.CNP);

            p2 = p2.Replace("@@CAMIN", student.DormName);
            p2 = p2.Replace("@@CAMERA", student.Room.Name.ToString());


            var contractName = "CONTRACT_" + student.LastName + "_" + student.FirstName + ".txt";
            var path = @"C:\Users\AndreiBonyhai\Desktop\Workspace\aplicatie-cazari\Angula2BaseStructure\contracte\" + contractName;
            if (!File.Exists(path))
            {
                using (StreamWriter sw = File.CreateText(path))
                {
                    sw.WriteLine(p1);
                    sw.WriteLine(p2);
                }
            }
        }



    }
}
