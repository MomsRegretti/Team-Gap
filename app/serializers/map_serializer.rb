class MapSerializer < ActiveModel::Serializer
  attributes :id, :uuid, :displayName
  has_many :comments
end
