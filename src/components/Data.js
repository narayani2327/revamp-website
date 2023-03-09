import DataImg from "./DataImg";
import DataText from "./DataText";

function Data() {
    return (
        <div className="data-main">
            <div className="data">
                <DataText number="1" datainfo="HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit"/>
                <DataImg/>
            </div>
            <div className="data">
                <DataImg/>
                <DataText number="2" datainfo="HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit"/>
            </div>
            <div className="data">
                <DataText number="3" datainfo="HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit"/>
                <DataImg/>
            </div>
            <div className="data">
                <DataImg/>
                <DataText number="4" datainfo="HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit"/>
            </div>
            <div className="data">
                <DataText number="5" datainfo="HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit"/>
                <DataImg/>
            </div>
            <div className="data">
                <DataImg/>
                <DataText number="6" datainfo="HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit"/>
            </div>
        </div>
    );
}

export default Data;