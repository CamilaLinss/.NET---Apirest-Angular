using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace _3.Repositorio.Data.DataJsonMock.Base
{
     public abstract class EntityMockBase<T>
    {

        private string Tabela;
        private readonly string jsonTable;
        private readonly string jsonTableSavePath;


        public EntityMockBase(string tabela)
        {
            Tabela = tabela;
            
            jsonTable = File.ReadAllText($"..\\infrastructure\\Database\\DataMockJson\\JsonTables\\Tabela{Tabela}.json");
            jsonTableSavePath = $"..\\infrastructure\\Database\\DataMockJson\\JsonTables\\Tabela{Tabela}.json";
        
        }


        protected List<T> registrosTabelaMock(){

             List<T> items = JsonConvert.DeserializeObject<List<T>>(jsonTable);

                return items;
        }

        protected void saveChangesMock(List<T> items){

            string JsonAtualizado = JsonConvert.SerializeObject(items.ToArray(), Formatting.Indented);

            File.WriteAllText(jsonTableSavePath, JsonAtualizado);
        }
        
    }
}