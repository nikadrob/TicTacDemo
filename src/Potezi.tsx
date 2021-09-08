import React from 'react';
import { Label } from '@fluentui/react/lib/Label';
import { ActivityItem, Icon, mergeStyleSets } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

const classNames = mergeStyleSets({
  exampleRoot: {
    marginTop: '7px',
    marginLeft: '7px',
    border: 'solid 1px #ccc',
    backgroundColor: 'cyan',
    width: '270px',
    height: '25px',
  },
  nameText: {
    fontWeight: 'bold',
  },
});

interface Potez {
  igrac: 'X' | 'O';
  pozicija: string;
}

interface PoteziProps {
  potezi: Potez[];
}

const Potezi: React.FC<PoteziProps> = (props) => {
  initializeIcons();

  const listaVrijednosti = props.potezi.map((p) => {
    return {
      key: p.igrac,
      activityDescription: [
        <span key={1} className={classNames.nameText}>
          <b>Igrač: {p.igrac}</b>&nbsp;&nbsp; odigrao je potez ({p.pozicija})
        </span>,
      ],
      activityIcon: (
        <Icon iconName={p.igrac === 'X' ? 'PeopleBlock' : 'PeopleRepeat'} />
      ),
      isCompact: true,
    };
  });

  return (
    <div className="potezi">
      <div>
        <Label disabled>Potezi</Label>
      </div>
      <div>
        {listaVrijednosti.map((item: { key: string | number }) => (
          <ActivityItem
            {...item}
            key={item.key}
            className={classNames.exampleRoot}
          />
        ))}
      </div>
    </div>
  );
};

export default Potezi;
