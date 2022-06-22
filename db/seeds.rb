u1 = User.create(username: 'Charlie' , email: "example0@gmail.com", password: '123' , name: "Charlie", avatar: "https://i.kym-cdn.com/photos/images/original/001/797/796/b52.jpg")

agents_url = "https://valorant-api.com/v1/agents"
agents_response = RestClient.get(agents_url)
agents_hash = JSON.parse(agents_response)
agents = agents_hash["data"].reject{|agent| agent["isPlayableCharacter"] == false}
agents.each do |agent|
    Agent.create!(uuid: agent["uuid"], displayName: agent["displayName"], displayIcon: agent["displayIcon"], description: agent["description"], bustPortrait: agent["bustPortrait"], fullPortrait: agent["fullPortrait"], fullPortraitV2: agent["fullPortraitV2"], background: agent["background"], backgroundGradientColors: agent["backgroundGradientColors"], role: agent["role"]["displayName"], roleIcon: agent["role"]["displayIcon"], role_uuid: agent["role"]["uuid"])
end

