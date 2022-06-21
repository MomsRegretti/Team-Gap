class MapagentSerializer < ActiveModel::Serializer
  attributes :rating, :agent_id
  belongs_to :agent
end
