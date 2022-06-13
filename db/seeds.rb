# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

    u1 = User.create(username: 'Charlie' , email: "example0@gmail.com", password: '123' , name: "Charlie")

    # maps_url = "https://valorant-api.com/v1/maps"
    # maps_response = RestClient.get(maps_url)
    # maps_hash = JSON.parse(maps_response)

    # maps_hash["data"].each do |map|
    #     Map.create!(uuid: map["uuid"], displayName: map["displayName"], listViewIcon: map["listViewIcon"], splash: map["splash"])
    # end

    # agents_url = "https://valorant-api.com/v1/agents"
    # agents_response = RestClient.get(agents_url)
    # agents_hash = JSON.parse(agents_response)

    # agents_hash["data"].each do |agent|
    #     Agent.create!(uuid: agent["uuid"], description: agent["description"], bustPortrait: agent["bustPortrait"], fullPortrait: agent["fullPortrait"], fullPortraitV2: agent["fullPortraitV2"], background: agent["background"], backgroundGradientColors: agent["backgroundGradientColors"], role: agent["role"])
    # end
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
