import BlaBla2 from './BlaBla2';
import ThemeSwitcher from './ThemeSwitcher';

export default function BlaBla() {
  return (
    <div className="component">
      <h1>BlaBla Seite</h1>
      <ThemeSwitcher />
      <div>
        <div>
          <BlaBla2 />
        </div>
      </div>
    </div>
  );
}
