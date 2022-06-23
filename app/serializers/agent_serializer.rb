class AgentSerializer < ActiveModel::Serializer
  attributes :id, :displayName, :bustPortrait, :fullPortraitV2, :fullPortrait, :role, :displayIcon, :roleIcon, :role_uuid
end
