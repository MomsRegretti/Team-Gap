class Map < ApplicationRecord    
    has_many :comments
    has_many :users, through: :comments

    has_many :mapagents
    has_many :agents, through: :mapagents

    def addagents
        m1 = self
        if m1.displayName == "Ascent"
            m1.update!(rolebias: "Initiator")
            Mapagent.create(map_id: m1.id, agent_id: 8, rating: "Strong") #sova
            Mapagent.create(map_id: m1.id, agent_id: 9, rating: "Strong") #killjoy
            Mapagent.create(map_id: m1.id, agent_id: 19, rating: "Strong") #jett
            Mapagent.create(map_id: m1.id, agent_id: 5, rating: "Generally Good") #kayo
            Mapagent.create(map_id: m1.id, agent_id: 18, rating: "Generally Good") #omen
            Mapagent.create(map_id: m1.id, agent_id: 4, rating: "Generally Good") #chamber
            Mapagent.create(map_id: m1.id, agent_id: 6, rating: "Weak") #skye
            Mapagent.create(map_id: m1.id, agent_id: 3, rating: "Weak") #raze
            Mapagent.create(map_id: m1.id, agent_id: 10, rating: "Weak") #viper
        elsif m1.displayName == "Haven"
            m1.update!(rolebias: "Initiator")
            Mapagent.create(map_id: m1.id, agent_id: 8, rating: "Strong")
            Mapagent.create(map_id: m1.id, agent_id: 11, rating: "Strong") #phoenix
            Mapagent.create(map_id: m1.id, agent_id: 7, rating: "Strong") #cypher
            Mapagent.create(map_id: m1.id, agent_id: 2, rating: "Generally Good") #breach
            Mapagent.create(map_id: m1.id, agent_id: 19, rating: "Generally Good")
            Mapagent.create(map_id: m1.id, agent_id: 4, rating: "Generally Good")
            Mapagent.create(map_id: m1.id, agent_id: 3, rating: "Weak")
            Mapagent.create(map_id: m1.id, agent_id: 10, rating: "Weak")
        elsif m1.displayName == "Bind"
            m1.update!(rolebias: "Controller")
            Mapagent.create(map_id: m1.id, agent_id: 10, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 16, rating: "Strong") #Sage
            Mapagent.create(map_id: m1.id, agent_id: 3, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 13, rating: "Generally Good") #brimstone
            Mapagent.create(map_id: m1.id, agent_id: 4, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 18, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 19, rating: "Weak")
        elsif m1.displayName == "Split"
            m1.update!(rolebias: "Initiator")
            Mapagent.create(map_id: m1.id, agent_id: 3, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 6, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 12, rating: "Strong") #Astra
            Mapagent.create(map_id: m1.id, agent_id: 18, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 4, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 16, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 8, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 13, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 5, rating: "Weak")
        elsif m1.displayName == "Breeze"
            m1.update!(rolebias: "Initiator")
            Mapagent.create(map_id: m1.id, agent_id: 10, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 19, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 8, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 4, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 5, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 3, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 18, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 13, rating: "Weak")
        elsif m1.displayName == "Icebox"
            m1.update!(rolebias: "Initiator")
            Mapagent.create(map_id: m1.id, agent_id: 16, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 10, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 17, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 4, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 8, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 19, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 3, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 13, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 6, rating: "Weak")
        elsif m1.displayName == "Fracture"
            m1.update!(rolebias: "Sentinel")
            Mapagent.create(map_id: m1.id, agent_id: 2, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 19, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 9, rating: "Strong") 
            Mapagent.create(map_id: m1.id, agent_id: 13, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 4, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 3, rating: "Generally Good") 
            Mapagent.create(map_id: m1.id, agent_id: 8, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 5, rating: "Weak") 
            Mapagent.create(map_id: m1.id, agent_id: 18, rating: "Weak")
        end
        # this method is called on a Map instance that has just been created by a user commenting on it
        # it will look at the displayName and create a join table of mapagents depending on that displayName
    end

end
