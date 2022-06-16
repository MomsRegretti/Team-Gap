class MapSerializer < ActiveModel::Serializer
  attributes :id, :uuid, :displayName, :listViewIcon
  has_many :comments
end
