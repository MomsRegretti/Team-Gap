class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :avatar
  has_many :maps
end
