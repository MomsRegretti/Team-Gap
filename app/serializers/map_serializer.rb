class MapSerializer < ActiveModel::Serializer
  attributes :id, :uuid, :displayName, :listViewIcon, :rolebias
  has_many :comments
  has_many :mapagents
  has_many :agents, through: :mapagents
end
