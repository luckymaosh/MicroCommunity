package com.java110;


import com.java110.code.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Hello world!
 */
public class OwnerRoomRelGeneratorApplication {

    protected OwnerRoomRelGeneratorApplication() {
        // prevents calls from subclass
        throw new UnsupportedOperationException();
    }

    /**
     * 代码生成器 入口方法
     *
     * @param args 参数
     */
    public static void main(String[] args) {
        Data data = new Data();
        data.setId("relId");
        data.setName("ownerRoomRel");
        data.setDesc("业主房屋");
        data.setShareParam("ownerId");
        data.setShareColumn("owner_id");
        data.setNewBusinessTypeCd("BUSINESS_TYPE_SAVE_OWNER_ROOM_REL");
        data.setUpdateBusinessTypeCd("BUSINESS_TYPE_UPDATE_OWNER_ROOM_REL");
        data.setDeleteBusinessTypeCd("BUSINESS_TYPE_DELETE_OWNER_ROOM_REL");
        data.setNewBusinessTypeCdValue("111100030001");
        data.setUpdateBusinessTypeCdValue("111100040001");
        data.setDeleteBusinessTypeCdValue("111100050001");
        data.setBusinessTableName("business_building_owner_room_rel");
        data.setTableName("building_owner_room_rel");
        Map<String, String> param = new HashMap<String, String>();
        param.put("relId", "rel_id");
        param.put("ownerId", "owner_id");
        param.put("bId", "b_id");
        param.put("roomId", "room_id");
        param.put("state", "state");
        param.put("userId", "user_id");
        param.put("statusCd", "status_cd");
        param.put("remark", "remark");
        param.put("operate", "operate");
        data.setParams(param);
        GeneratorSaveInfoListener generatorSaveInfoListener = new GeneratorSaveInfoListener();
        generatorSaveInfoListener.generator(data);

        GeneratorAbstractBussiness generatorAbstractBussiness = new GeneratorAbstractBussiness();
        generatorAbstractBussiness.generator(data);

        GeneratorIServiceDaoListener generatorIServiceDaoListener = new GeneratorIServiceDaoListener();
        generatorIServiceDaoListener.generator(data);

        GeneratorServiceDaoImplListener generatorServiceDaoImplListener = new GeneratorServiceDaoImplListener();
        generatorServiceDaoImplListener.generator(data);

        GeneratorServiceDaoImplMapperListener generatorServiceDaoImplMapperListener = null;
        generatorServiceDaoImplMapperListener = new GeneratorServiceDaoImplMapperListener();
        generatorServiceDaoImplMapperListener.generator(data);

        GeneratorUpdateInfoListener generatorUpdateInfoListener = new GeneratorUpdateInfoListener();
        generatorUpdateInfoListener.generator(data);

        GeneratorDeleteInfoListener generatorDeleteInfoListener = new GeneratorDeleteInfoListener();
        generatorDeleteInfoListener.generator(data);

        GeneratorInnerServiceSMOImpl generatorInnerServiceSMOImpl = new GeneratorInnerServiceSMOImpl();
        generatorInnerServiceSMOImpl.generator(data);

        GeneratorDtoBean generatorDtoBean = new GeneratorDtoBean();
        generatorDtoBean.generator(data);

        GeneratorIInnerServiceSMO generatorIInnerServiceSMO = new GeneratorIInnerServiceSMO();
        generatorIInnerServiceSMO.generator(data);
    }
}
