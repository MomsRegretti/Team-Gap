# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

    u1 = User.create(username: 'Charlie' , email: "example0@gmail.com", password: '123' , name: "Charlie", avatar: "https://i.kym-cdn.com/photos/images/original/001/797/796/b52.jpg")

    # map1 = Map.create!(id:"7eaecc1b-4337-bbf6-6ab9-04b8f06b3319", uuid: "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319", displayName: "Ascent", splash: "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png" , listViewIcon: nil)

    # maps_url = "https://valorant-api.com/v1/maps"
    # maps_response = RestClient.get(maps_url)
    # maps_hash = JSON.parse(maps_response)["data"]
    # maps = maps_hash.reject{|map| map["uuid"] == "ee613ee9-28b7-4beb-9666-08db13bb2244"}
    
    # maps.each do |map|
    #     Map.create!( uuid: map["uuid"], displayName: map["displayName"], listViewIcon: map["listViewIcon"], splash: map["splash"])
    # end

    agents_url = "https://valorant-api.com/v1/agents"
    agents_response = RestClient.get(agents_url)
    agents_hash = JSON.parse(agents_response)
    agents = agents_hash["data"].reject{|agent| agent["isPlayableCharacter"] == false}
    agents.each do |agent|
        Agent.create!(uuid: agent["uuid"], description: agent["description"], bustPortrait: agent["bustPortrait"], fullPortrait: agent["fullPortrait"], fullPortraitV2: agent["fullPortraitV2"], background: agent["background"], backgroundGradientColors: agent["backgroundGradientColors"], role: agent["role"])
    end
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
