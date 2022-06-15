class MapSerializer < ActiveModel::Serializer
  attributes :id, :uuid, :splash, :displayName, :listViewIcon
  has_many :comments
end
